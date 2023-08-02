import { CarObject } from 'src/models/CarObject';

export interface DialogData {
  title: string;
  car: CarObject;
  mode: "add" | "edit";
}
