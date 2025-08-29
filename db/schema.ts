import { mysqlTable, int,  text, varchar, timestamp, primaryKey } from 'drizzle-orm/mysql-core'

export const users = mysqlTable('users', {
  id: int('id').autoincrement().primaryKey(),
  username: varchar('username', { length: 50 }).notNull().unique(),
  email: varchar('email', { length: 100 }).notNull().unique(),
  password: varchar('password', { length: 255 }).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updated_at: timestamp('updated_at').defaultNow().onUpdateNow().notNull(), 
})

// Таблица: источники заявок
export const leadSources = mysqlTable('lead_sources', {
  id: int('id').autoincrement().primaryKey(),
  name: varchar('name', { length: 50 }).notNull().unique(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
})

// Таблица: заявки
export const leads = mysqlTable('leads', {
  id: int('id').autoincrement().primaryKey(),
  message: text('message'), 
  sourceId: int('source_id')
    .notNull()
    .references(() => leadSources.id), 
  name: varchar('name', { length: 100 }), 
  phone: varchar('phone', { length: 20 }).notNull(),
  email: varchar('email', { length: 100 }),
  createdAt: timestamp('created_at').defaultNow().notNull(),
})


export type Lead = typeof leads.$inferSelect
export type NewLead = typeof leads.$inferInsert

export type LeadSource = typeof leadSources.$inferSelect
export type NewLeadSource = typeof leadSources.$inferInsert

export type User = typeof users.$inferSelect
export type NewUser = typeof users.$inferInsert