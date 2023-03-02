import { IsNotEmpty, Length } from 'class-validator';

export class CreateTeamMember {
  @IsNotEmpty()
  @Length(5, 100)
  name: string;
  @IsNotEmpty({
    message: 'O membro nao pode ser branco',
  })
  function: string;
}
