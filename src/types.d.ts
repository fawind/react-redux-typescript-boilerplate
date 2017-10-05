interface System {
  import<T = any>(module: string): Promise<T>
}
declare let System: System;
