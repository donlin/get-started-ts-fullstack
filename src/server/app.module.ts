import { Module } from '@nestjs/common';
import { IndexModule } from './index.module';

@Module({
  imports: [IndexModule],
})
export class ApplicationModule {}
