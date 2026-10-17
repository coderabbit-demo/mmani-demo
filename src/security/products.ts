import { DatabaseSync } from "node:sqlite";

/** A disposable local catalog containing synthetic data only. */
export function createCatalog(): DatabaseSync {
  const db = new DatabaseSync(":memory:");
  db.exec(`CREATE TABLE products (id INTEGER PRIMARY KEY, name TEXT NOT NULL);
    INSERT INTO products VALUES (1, 'Notebook'), (2, 'Pencil'), (3, 'Folder');`);
  return db;
}

/** Search product names using a case-insensitive literal substring. */
export function searchProducts(db: DatabaseSync, query: string) {
  return db.prepare(
    "SELECT id, name FROM products WHERE instr(lower(name), lower(?)) > 0 ORDER BY id",
  ).all(query);
}
