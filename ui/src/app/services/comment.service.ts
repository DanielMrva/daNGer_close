import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { ENC_COMMENTS, USER_COMMENTS, ALL_COMMENTS, SINGLE_COMMENT } from 'schemas/queries';
import { ADD_COMMENT } from 'schemas/mutations';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private apollo: Apollo) { }

  encComments(encounterId: string){
    return this.apollo.watchQuery({
      query: ENC_COMMENTS,
      variables: {
        encounterId: encounterId
      }
    })
    .valueChanges.subscribe(({data}: any) => {
      this.encComments = data.encounterComments
    });
  }

  userComments(userId: string) {
    return this.apollo.watchQuery({
      query: USER_COMMENTS, 
      variables: {
        userId: userId
      }
    })
    .valueChanges.subscribe(({data}: any) => {
      this.userComments = data.userComments
    });
  }

  allComments() {
    return this.apollo.watchQuery({
      query: ALL_COMMENTS
    })
    .valueChanges.subscribe(({data}: any) => {
      this.allComments = data.allComments
    });
  }

  singleComment(commentId: string) {
    return this.apollo.watchQuery({
      query: SINGLE_COMMENT,
      variables: {
        commentId: commentId
      }
    })
    .valueChanges.subscribe(({data}: any) => {
      this.singleComment = data.onceComment
    });
  }

  addComment(
    commentText: string,
    commentUser: string,
    encounterId: string,
    userId: string
  ) {
    return this.apollo.mutate({
      mutation: ADD_COMMENT,
      variables: {
        commentText,
        commentUser,
        encounterId,
        userId
      }
    });
  }
}
