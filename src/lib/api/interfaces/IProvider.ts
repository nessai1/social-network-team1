export default interface IProvider {
    getItems(offset?: number, limit?: number): Promise<Object[]>,
    getItem(id: number): Promise<Object>
}