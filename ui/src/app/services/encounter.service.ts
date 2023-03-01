import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { ALL_ENCOUNTERS, USER_ENCOUNTERS, SINGLE_ENCOUNTER, VIS_ENCOUNTERS, FRIENDS_ENCOUNTERS } from 'schemas/queries';
import { ADD_ENCOUNTER } from 'schemas/mutations';


@Injectable({
  providedIn: 'root'
})
export class EncounterService {


  constructor(private apollo: Apollo) { }

    allEncounters() {
      return this.apollo.watchQuery({
        query: ALL_ENCOUNTERS
      })
      .valueChanges.subscribe(({data}: any) => {
        this.allEncounters = data.encounters
      });
    }

    userEncounters(username: string) {
      return this.apollo.watchQuery({
        query: USER_ENCOUNTERS,
        variables: {
          username: username
        },
      })
      .valueChanges.subscribe(({data}: any) => {
        this.userEncounters = data.encounters
      });
    }

    singleEncounter(encounterId: string) {
      return this.apollo.watchQuery({
        query: SINGLE_ENCOUNTER,
        variables: {
          encounterId: encounterId
        },
      })
      .valueChanges.subscribe(({data}: any) => {
        this.singleEncounter = data.encounter
      });
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
        .valueChanges.subscribe(({data}: any) => {
          this.visEncounters = data.visEncounters
        });
      }

    friendsEncounters(userId: string) {
        return this.apollo.watchQuery({
          query: FRIENDS_ENCOUNTERS,
          variables: {
            userId: userId
          }
        })
        .valueChanges.subscribe(({data}: any) => {
          this.friendsEncounters = data.friendsEncounters
        });
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
