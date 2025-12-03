import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Firestore, collection, collectionData, addDoc, doc, deleteDoc, updateDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-water-analysis',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './water-analysis.html',
  styleUrls: ['./water-analysis.css']
})
export class WaterAnalysis {


  date = signal('');
  sourceAddress = signal('');
  waterStatus = signal('');
  remarks = signal('');

  results: any[] = [];

  constructor(private firestore: Firestore) {
    const waterCollection = collection(this.firestore, 'water_analysis_results');


    collectionData(waterCollection, { idField: 'id' })
      .subscribe(data => {
        this.results = data;
      });
  }
  addResult() {
    const date = this.date();
    const sourceAddress = this.sourceAddress();
    const waterStatus = this.waterStatus();
    const remarks = this.remarks();

    if (!date || !sourceAddress || !waterStatus || !remarks) {
      alert("All fields are required.");
      return;
    }

    const waterCollection = collection(this.firestore, 'water_analysis_results');
    addDoc(waterCollection, { date, sourceAddress, waterStatus, remarks });

    this.date.set('');
    this.sourceAddress.set('');
    this.waterStatus.set('');
    this.remarks.set('');
  }
  updateResult(id: string, newDate: string, newSource: string, newStatus: string, newRemarks: string) {
    const waterDoc = doc(this.firestore, `water_analysis_results/${id}`);
    updateDoc(waterDoc, {
      date: newDate,
      sourceAddress: newSource,
      waterStatus: newStatus,
      remarks: newRemarks
    });
  }
  deleteResult(id: string) {
    const waterDoc = doc(this.firestore, `water_analysis_results/${id}`);
    deleteDoc(waterDoc);
  }
}
