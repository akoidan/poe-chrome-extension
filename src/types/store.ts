import {AlertModel} from "@/types/model";


interface IAlertsState {
  alerts: AlertModel[];
}

interface IRootState {
  alerts: IAlertsState;
}

export {IAlertsState, IRootState};
