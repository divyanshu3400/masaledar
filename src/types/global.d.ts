interface AdServePayload {
    serve: Record<string, unknown>;
}

interface Window {
    AdProvider: AdServePayload[];
}