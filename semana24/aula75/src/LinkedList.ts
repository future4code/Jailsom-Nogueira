export class ListNode {
   constructor(
      public value: any,
      public next: ListNode | null = null
   ) { }
}

export class LinkedList {
   constructor(public start: ListNode | null = null) { }

   public addToTail(value: any): void {
     
      if(!this.start){
         this.start = new ListNode(value)
         return
      }

      let currentNode: ListNode = this.start

      while(currentNode.next !== null){
         currentNode = currentNode.next
      }

      currentNode.next = new ListNode(value)
   }

   public findNode(value: any): ListNode | null{
      let currentNode : ListNode | null = this.start

      while(currentNode !== null && currentNode.value !== value ){
         currentNode = currentNode.next
      }

      return currentNode
   }
}

export const firstNode: ListNode = new ListNode(
   "Mello",
   new ListNode(
      "Turing",
      new ListNode(
         "Jackson",
         new ListNode(
            "Tang"
         )
      )
   )
)

export const labenuClasses: LinkedList = new LinkedList(firstNode)