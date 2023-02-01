import { FormControl } from "@angular/forms";

export interface ILogin {
  username: string | FormControl;
  password: string | FormControl;
}
