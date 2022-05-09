export default interface IProvider {
    getItems(): Promise<Object[]>,
    getItem(id: number): Promise<Object>
}