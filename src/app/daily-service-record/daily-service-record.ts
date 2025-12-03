import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Firestore, collection, collectionData, addDoc, doc, deleteDoc, updateDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-daily-service-record',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './daily-service-record.html',
  styleUrl: './daily-service-record.css'
})
export class DailyServiceRecord {

  date = signal('');
  patientName = signal('');
  age = signal<number | null>(null);
  gender = signal('');
  sicknessDiagnosed = signal('');
  treatmentProvided = signal('');
  attendingPhysician = signal('');

  records: any[] = [];

  constructor(private firestore: Firestore) {
    const col = collection(this.firestore, 'daily_service_records');
    collectionData(col, { idField: 'id' }).subscribe(data => {
      this.records = data;
    });
  }

  addRecord() {
    const col = collection(this.firestore, 'daily_service_records');

    if (!this.date() || !this.patientName() || !this.age() ||
        !this.gender() || !this.sicknessDiagnosed() || !this.treatmentProvided() || !this.attendingPhysician()) {
      alert("All fields required");
      return;
    }

    addDoc(col, {
      date: this.date(),
      patientName: this.patientName(),
      age: this.age(),
      gender: this.gender(),
      sicknessDiagnosed: this.sicknessDiagnosed(),
      treatmentProvided: this.treatmentProvided(),
      attendingPhysician: this.attendingPhysician()
    });

    this.date.set('');
    this.patientName.set('');
    this.age.set(null);
    this.gender.set('');
    this.sicknessDiagnosed.set('');
    this.treatmentProvided.set('');
    this.attendingPhysician.set('');
  }

  updateRecord(rec: any) {
    const ref = doc(this.firestore, `daily_service_records/${rec.id}`);
    updateDoc(ref, rec);
  }

  deleteRecord(id: string) {
    const ref = doc(this.firestore, `daily_service_records/${id}`);
    deleteDoc(ref);
  }
}
