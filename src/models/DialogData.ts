import { CarObject } from 'src/models/CarObject';

export interface DialogData {
  id: string;
  title: string;
  car: CarObject;
  mode: "add" | "edit";
}
