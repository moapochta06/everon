import { db } from '~/db'
import { productGroups } from '~/db/schema'
import { eq } from 'drizzle-orm'
import { defineEventHandler } from 'h3'

export default defineEventHandler(async (event) => {
  const slug = getRouterParam(event, 'slug')
  
  if (!slug) {
    throw createError({ statusCode: 400, message: 'Slug обязателен' })
  }

  const category = await db.select()
    .from(productGroups)
    .where(eq(productGroups.slug, slug))
    .execute()

  if (category.length === 0) {
    throw createError({ statusCode: 404, message: 'Категория не найдена' })
  }

  return category[0]
})