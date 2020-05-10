import {AlertModel, CurrentPage} from "@/types/model";


interface IAlertsState {
  alerts: AlertModel[];
}

interface IPageState {
  currentPage: CurrentPage;
}

interface IRootState {
  alerts: IAlertsState;
  page: IPageState;
}

export {IAlertsState, IRootState, IPageState};
