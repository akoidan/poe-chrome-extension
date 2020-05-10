import {Component} from "vue-property-decorator";
import {Logger} from "lines-logger";
import Vue from "vue";
import {loggerFactory} from "@/utils/singletons";

/**
 * Injects $logger to every component
 */
// istanbul ignore next
@Component
class LoggerMixin extends Vue {
  private privateLogger!: Logger|null|undefined;

  public get $logger(): Logger {
    if (this.privateLogger !== null) {
      const tag: string|undefined = this.$vnode?.tag;
      // Provide logger only to vew component, exclude those one we don't need
      if (tag && !(/^vue-component-\d+-(transition|-LoggerMixin)$/u).test(tag)) { // eslint-disable-line prefer-named-capture-group
        this.privateLogger = loggerFactory.getLoggerColor(tag, "#35495e");
      } else {
        this.privateLogger = null;
      }
    }
    // Assume all components have logger
    return this.privateLogger!; // eslint-disable-line @typescript-eslint/no-non-null-assertion
  }

  public updated(): void {
    if (this.$logger) { // eslint-disable-line @typescript-eslint/no-unnecessary-condition
      this.$logger.trace("Updated")();
    }
  }

  public created(): void {
    if (this.$logger) { // eslint-disable-line @typescript-eslint/no-unnecessary-condition
      this.$logger.trace("Created")();
    }
  }
}

Vue.mixin(LoggerMixin);

export {LoggerMixin};
