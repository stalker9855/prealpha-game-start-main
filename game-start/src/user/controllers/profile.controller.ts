import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, HttpCode, ValidationPipe } from '@nestjs/common';
import { ProfileService } from '../services/profile.service';
import { CreateProfileDto } from '../dto/create-profile.dto';
import { UpdateProfileDto } from '../dto/update-profile.dto';

@Controller('users/profiles')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Post()
  @HttpCode(200)
  @UsePipes(ValidationPipe)
  createUser(@Body() profileData: CreateProfileDto) {
    return this.profileService.createNewProfile(profileData);
  }

  @Get()
  findAll() {
    return this.profileService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.profileService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProfileDto: UpdateProfileDto) {
    return this.profileService.update(+id, updateProfileDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.profileService.remove(+id);
  }
}

