type ColorType = "RESET" | "DEBUG" | "SUCCESS" | "INFO" | "WARN" | "ERROR"
enum ColorText {
    RESET = "\x1b[0m",
    DEBUG = "\x1b[1;36m",
    SUCCESS = "\x1b[1;32m",
    INFO = "\x1b[1;34m",
    WARN = "\x1b[1;33m",
    ERROR = "\x1b[1;31m",
}

export {
    ColorType,
    ColorText
};