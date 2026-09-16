import { Board, Column } from "./models";



export async function createDefaultBoard(userId: string) {

    // 1. Create Board
    const board = await Board.create({
        name: "Job Hunt",
        userId,
        columns: [],
    });

    // 2. Create Columns
    const columns = await Column.insertMany([
        {
            name: "Wishlist",
            boardId: board._id,
            order: 1,
        },
        {
            name: "Applied",
            boardId: board._id,
            order: 2,
        },
        {
            name: "Interview",
            boardId: board._id,
            order: 3,
        },
        {
            name: "Offer",
            boardId: board._id,
            order: 4,
        },
        {
            name: "Rejected",
            boardId: board._id,
            order: 5,
        },
    ]);

    // 3. Save Column IDs inside Board
    board.columns = columns.map(
        (column) => column._id
    );

    await board.save();

    return board;
}