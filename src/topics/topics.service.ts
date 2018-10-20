import { Injectable } from '@nestjs/common'
import { Topics } from '../graphql.schema'

@Injectable()
export class TopicsService {
  findByCategory(): Topics[] {
    return [
      {
        id: '1',
        title: 'Electron视频教程_Electron+Vue跨平台桌面软件开发视频教程(全网首发)',
        category: '分享',
        author: {
          username: 'jkvim',
        },
        commentCount: 400,
        visitCount: 5000,
        lastActivity: '3天前',
      },
    ]
  }
}
