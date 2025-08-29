import { db } from '~/db'
import { leads } from '~/db/schema'
import { defineEventHandler } from 'h3'
import { desc } from 'drizzle-orm'

export default defineEventHandler(async (event) => {
  try {
    // Получаем все лиды с сортировкой по дате создания (новые сначала)
    const allLeads = await db.select()
      .from(leads)
      .orderBy(desc(leads.createdAt))
      .execute()

    return { 
      success: true, 
      leads: allLeads,
      count: allLeads.length
    }

  } catch (error: any) {
    console.error('Error fetching leads:', error)
    
    throw createError({
      statusCode: 500,
      message: 'Internal server error'
    })
  }
})