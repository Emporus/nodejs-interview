import winston from "winston";
import AbstractLogger from "./AbstractLogger";
import { DEBUG_LEVEL } from "../../configs/config";

const { format } = winston;

class Logger extends AbstractLogger {
  private logger: winston.Logger;

  constructor(private level: string) {
    super();
    this.logger = winston.createLogger({
      level: this.level,
      format: winston.format.json(),
      transports: [
        new winston.transports.Console({
          format: format.combine(format.colorize(), format.simple()),
        }),
      ],
    });
  }

  public log(level: string, message: string): void {
    this.logger.log(level.toLowerCase(), message);
  }
}

export default new Logger(DEBUG_LEVEL);
