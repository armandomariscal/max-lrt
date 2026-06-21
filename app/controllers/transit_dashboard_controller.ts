import { HttpContext } from '@adonisjs/core/http'
import fs from 'node:fs/promises'
import { join } from 'node:path'
import app from '@adonisjs/core/services/app'

export default class TransitDashboardController {
  private async readJsonFile(fileName: string): Promise<any[]> {
    try {
      const filePath = join(app.makePath(), fileName)
      const data = await fs.readFile(filePath, 'utf-8')
      return JSON.parse(data)
    } catch (error) {
      return []
    }
  }

  async getRoutes({ response }: HttpContext) {
    const data = await this.readJsonFile('routes_mock.json')
    return response.json(data)
  }

  async getVehicles({ response }: HttpContext) {
    const data = await this.readJsonFile('vehicles_mock.json')
    return response.json(data)
  }

  async getStations({ response }: HttpContext) {
    const data = await this.readJsonFile('stations_mock.json')
    return response.json(data)
  }

  async getAlerts({ response }: HttpContext) {
    const data = await this.readJsonFile('alerts_mock.json')
    return response.json(data)
  }
}
