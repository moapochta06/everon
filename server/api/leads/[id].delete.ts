import { db } from '~/db'
import { leads } from '~/db/schema'
import { defineEventHandler } from 'h3'
import { eq } from 'drizzle-orm'

export default defineEventHandler(async (event) => {
  try {
    // Получаем ID из параметров пути
    const id = Number(event.context.params?.id)
    
    if (!id || isNaN(id)) {
      throw createError({
        statusCode: 400,
        message: 'Invalid lead ID'
      })
    }

    // Удаляем заявку из базы
    const result = await db.delete(leads)
      .where(eq(leads.id, id))
      .execute()

    return { 
      success: true,
      message: 'Lead deleted successfully'
    }

  } catch (error: any) {
    console.error('Error deleting lead:', error)
  }
})