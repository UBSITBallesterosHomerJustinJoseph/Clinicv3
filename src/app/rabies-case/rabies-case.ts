import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Firestore, collection, collectionData, addDoc, doc, updateDoc, deleteDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-rabies-case',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './rabies-case.html',
  styleUrls: ['./rabies-case.css']
})
export class RabiesCase {

  date = signal('');
  patientName = signal('');
  age = signal<number | null>(null);
  gender = signal('');
  animalType = signal('');
  rabiesStatus = signal('');
  treatmentGiven = signal('');

  cases: any[] = [];

  constructor(private firestore: Firestore) {
    const rabiesCollection = collection(this.firestore, 'rabies_cases');

    collectionData(rabiesCollection, { idField: 'id' })
      .subscribe(data => this.cases = data);
  }

  addCase() {
    if (!this.date() || !this.patientName() || this.age() === null ||
        !this.gender() || !this.animalType() || !this.rabiesStatus() ||
        !this.treatmentGiven()) {
      alert("All fields are required.");
      return;
    }

    const col = collection(this.firestore, 'rabies_cases');
    addDoc(col, {
      date: this.date(),
      patientName: this.patientName(),
      age: this.age(),
      gender: this.gender(),
      animalType: this.animalType(),
      rabiesStatus: this.rabiesStatus(),
      treatmentGiven: this.treatmentGiven()
    });

    this.date.set('');
    this.patientName.set('');
    this.age.set(null);
    this.gender.set('');
    this.animalType.set('');
    this.rabiesStatus.set('');
    this.treatmentGiven.set('');
  }

  updateCase(rec: any) {
    const docRef = doc(this.firestore, `rabies_cases/${rec.id}`);
    const { id, ...cleanData } = rec; 
    updateDoc(docRef, cleanData);
  }

  deleteCase(id: string) {
    const docRef = doc(this.firestore, `rabies_cases/${id}`);
    deleteDoc(docRef);
  }
}
