import {Logger} from "lines-logger";
import {Xhr} from "@/utils/xhr";


export class Api {
  protected readonly logger: Logger;

  private readonly xhr: Xhr;

  // https://github.com/typescript-eslint/typescript-eslint/pull/801#issuecomment-555160908
  public constructor(
    xhr: Xhr, logger: Logger,
  ) {
    this.logger = logger;
    this.xhr = xhr;
  }

  public async getSource(url: string): Promise<string> {
    let response = await fetch(url);
    return response.text();
  }

}
