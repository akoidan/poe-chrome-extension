import {Module, Mutation, VuexModule, getModule} from "vuex-module-decorators";
import {CurrentPage} from "@/types/model";
import {IPageState} from "@/types/store";
import {stateDecoratorFactory} from "@/store/stateDecoratorFactory";
import {store} from "@/store/store";

/**
 * Main vuex module which shares state across multiple vue components.
 * This is required to avoid hunders of VueBuses when state sharing is required
 */
@Module({
  dynamic: true,
  name: "page",
  store,
})
class PageModule extends VuexModule implements IPageState {
  public currentPage: CurrentPage = null;

  @Mutation
  public setCurrentPage(newPage: CurrentPage): void {
    this.currentPage = newPage;
  }
}

const pageModule: PageModule = getModule(PageModule);

/*
 * TPN - TypePropertyName
 * TCT - TypeConsumerType
 * the generics bellow are inherited strictly from stateDecoratorFactory, see its docs
 */
const PageState: <TCT extends (TCT[TPN] extends PageModule[TPN] ? unknown : never),
  TPN extends (keyof TCT & keyof PageModule)>(vueComponent: TCT, fileName: TPN) => void =
    stateDecoratorFactory(pageModule);

export {pageModule, PageState};
