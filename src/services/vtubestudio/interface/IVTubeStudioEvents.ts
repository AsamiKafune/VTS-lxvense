export default interface IVTubeStudioEvents {
    "ready": () => void;
    "disconnect": () => void;
    "authenticationFailed": () => void;
}