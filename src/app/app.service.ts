import { Injectable } from '@angular/core';

import { Team } from './team.model';

@Injectable()
export class AppService {

    getTeams(): Team[] {
        return [
            new Team(
                'Engineering',
                ['Lawana Fan', 'Larry Rainer', 'Rahul Malik', 'Leah Shumway']
            ),
            new Team(
                'Executive',
                ['Rohan Gupta', 'Ronda Dean', 'Robby Maharaj']
            ),
            new Team(
                'Finance',
                ['Caleb Brown', 'Carol Smithson', 'Carl Sorensen']
            ),
            new Team(
                'Sales',
                ['Ankit Jain', 'Anjali Maulingkar']
            )
        ];
    }
}
