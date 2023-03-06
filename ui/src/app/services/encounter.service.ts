import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { ALL_ENCOUNTERS, USER_ENCOUNTERS, SINGLE_ENCOUNTER, VIS_ENCOUNTERS, FRIENDS_ENCOUNTERS } from 'schemas/queries';
import { ADD_ENCOUNTER } from 'schemas/mutations';
import { map } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class EncounterService {


  constructor(private apollo: Apollo) { }

    allEncounters() {
      return this.apollo.watchQuery({
        query: ALL_ENCOUNTERS
      })
      .valueChanges.pipe(map((result: any) => {
        console.log(result.data.allEncounters)
        return result.data.allEncounters;
      }));
    }

    userEncounters(encounterUser: string) {
      return this.apollo.watchQuery({
        query: USER_ENCOUNTERS,
        variables: {
          encounterUser: encounterUser
        },
      })
      .valueChanges.pipe(map((result: any) => {
        console.log(result.data.userEncounters)
        return result.data.userEncounters;
      }))
    }

    singleEncounter(encounterId: string) {
      return this.apollo.watchQuery({
        query: SINGLE_ENCOUNTER,
        variables: {
          encounterId: encounterId
        }
      })
      .valueChanges.pipe(map((result: any) => {
        console.log(result.data.singleEncounter)
        let resultArray = [];
        resultArray.push(result.data.singleEncounter);
        return resultArray;

      }))
    }

    visEncounters(
      lowlat: number, 
      hilat: number, 
      lowlng: number, 
      hilng: number) {
        return this.apollo.watchQuery({
          query: VIS_ENCOUNTERS,
          variables: {
            lowlat: lowlat,
            hilat: hilat,
            lowlng: lowlng,
            hilng: hilng
          }
        })
        .valueChanges.pipe(map((result: any) => {
          console.log(result.data.visEncounters)
          return result.data.visEncounters;
        }))
      }

    friendsEncounters(userId: string) {
        return this.apollo.watchQuery({
          query: FRIENDS_ENCOUNTERS,
          variables: {
            userId: userId
          }
        })
        .valueChanges.pipe(map((result: any) => {
          console.log(result.data.friendsEncounters)
          return result.data.friendsEncounters.Friends_Encounters;
        }))
      }

    addEncounter(
        description: string,
        encType: string,
        category: string[],
        date: string,
        lat: number,
        lng: number,
        title: string,
        encounterUser: string,
        userId: string
      ) {
        return this.apollo.mutate({
          mutation: ADD_ENCOUNTER,
          variables: {
            description,
            encType,
            category,
            date,
            lat,
            lng,
            title,
            encounterUser,
            userId
          }
        });
      }


};
