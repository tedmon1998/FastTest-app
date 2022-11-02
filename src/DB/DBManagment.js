// дает вашему приложению доступ к базе данных
import * as SQLite from 'expo-sqlite'
// обеспечивает доступ к файловой системе, хранящейся локально на устройстве
import * as FileSystem from 'expo-file-system'
// обеспечивает интерфейс к системе ресурсов
import { Asset } from 'expo-asset'

// функция которая проверяет и в случая отсутствия БД, загружает его и выводит его содержимое
export async function openDatabaseAndCreate() {
    // имя нашего БД (которое будет после го загрузки (создания))
    const dbName = 'testDB.sqlite'
    // путь, где будут храниться БД приложения
    const sqlDir = FileSystem.documentDirectory + "SQLite/"
    // проверка существует БД или нет (exists выводит булевый результат)
    if (!(await FileSystem.getInfoAsync(sqlDir + dbName)).exists) {
        // создаем директорию при его отсутствии, intermediates указывает на то, что
        // если нет родительского каталога (SQLite), чтобы его так же создал 
        await FileSystem.makeDirectoryAsync(sqlDir, { intermediates: true })
        // получаем экземпляр, предстовляющий ресурс с учетом его модуля
        const asset = Asset.fromModule(require('../../assets/database/testDB.sqlite'))
        // загружаем данные в локальный файл (в каталге кеша ус-ва)
        await FileSystem.downloadAsync(asset.uri, sqlDir + dbName).then(({ url }) => console.log(`finish download: ${url}`)).catch(error => console.log(`download ${error}`))
    }
    //  открываем соединение с сервером
    const db = await SQLite.openDatabase(dbName)
    // выполняем транзакцию в БД
    db.transaction(tx => {
        // выполненям непосредственно сам запрос в БД (вывод всей таблицы),
        // [] - говорит о том, что мы ничего туда не передаем 
        tx.executeSql(
            'SELECT * FROM allData', [],
            (_, { rows }) => console.log(JSON.stringify(rows))
        )
        // обработка исключения
    }), error => console.log(`select error: ${error}`);
}


export const checkExistenceDB = async (dbName) => {
    const dbDir = FileSystem.documentDirectory + 'SQLite/'
    const dirInfo = await FileSystem.getInfoAsync(dbDir + dbName)
    console.log(`dirInfo.exists ${dirInfo.exists}`);
    if (!dirInfo.exists) return false
    else return true
}

export async function createDatabase(dbName) {

    const db = await SQLite.openDatabase(dbName)
    db.transaction(tx => {
        tx.executeSql(`
        CREATE TABLE "mytest"
        ("id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
            "question" TEXT,
            "answer" TEXT);`)
    }), error => console.log(`create error: ${error}`);
    console.log('table created');
}

export async function select(dbName) {
    const db = SQLite.openDatabase(dbName)
    console.log(JSON.stringify(db));
    db.transaction(tx => {
        console.log(JSON.stringify(tx));
        tx.executeSql(
            'SELECT * FROM allData',
            [],
            (_, { rows }) => {
                console.log(JSON.stringify(rows));
                // console.log(rows._array);
            })
    }), error => console.log(`create select: ${error}`);
}

export async function insertInto(dbName, question = "", answer = "") {
    const dirInfo = await checkExistenceDB(dbName)
    if (!dirInfo) await createDatabase(dbName)

    const db = SQLite.openDatabase(dbName)
    db.transaction(tx => {
        tx.executeSql(`
        INSERT INTO mytest (question, answer)
        values ('${question}', '${answer}')
        `)
    }), error => console.log(`insert error: ${error}`);
}

export async function updateData(dbName, id, question = "", answer = "") {
    const db = SQLite.openDatabase(dbName)
    db.transaction(tx => {
        tx.executeSql(`
        UPDATE mytest SET question = "${question}", answer = "${answer}"
        WHERE id = "${id}"
        `)
    }), error => console.log(`update error: ${error}`);
}

export async function deleteDB(dbName) {
    const dbDir = FileSystem.documentDirectory + 'SQLite/'
    const dirInfo = await FileSystem.getInfoAsync(dbDir + dbName)
    if (dirInfo.exists) await FileSystem.deleteAsync(dbDir + dbName, { idempotent: true })

    console.log('table deleted');
}