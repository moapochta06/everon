import { mysqlTable, int,  text, varchar, timestamp, primaryKey } from 'drizzle-orm/mysql-core'
 
export const users = mysqlTable('users', {
  id: int('id').autoincrement().primaryKey(),
  username: varchar('username', { length: 50 }).notNull().unique(),
  password: varchar('password', { length: 255 }).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(), 
})

export type InsertUser = typeof users.$inferInsert;

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

// Группы товаров
export const productGroups = mysqlTable('product_groups', {
  id: int('id').autoincrement().primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  slug: varchar('slug', { length: 255 }).notNull(),
  imageUrl: varchar('image_url', { length: 500 }),
  seoTitle: varchar('seo_title', { length: 255 }),
  seoDescription: text('seo_description'),
  description: text('description'),
  parentId: int('parent_id'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

//тип для вставки группы товаров
export type InsertProductGroup = typeof productGroups.$inferInsert;


export type Lead = typeof leads.$inferSelect
export type NewLead = typeof leads.$inferInsert

export type LeadSource = typeof leadSources.$inferSelect
export type NewLeadSource = typeof leadSources.$inferInsert

export type User = typeof users.$inferSelect
export type NewUser = typeof users.$inferInsert