export default abstract class allRevenuesCase<E, S> {
  abstract execute(implementation: E): Promise<S>;
}
