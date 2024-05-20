import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AvaliacaoModule } from './avaliacao/avaliacao.module';

@Module({
  imports: [UserModule, AvaliacaoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
