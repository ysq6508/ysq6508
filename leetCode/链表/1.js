let lb = {
    val: 1,     //值
    next: {     //指针
        val: 2,
        next: {
            val: 3,
            next: null
        }
    }      
}

function ListNode(val) {
    this.val = val,
    this.next = null
}
const node = new ListNode(1)
const node2 = new ListNode(2)
const node3 = new ListNode(3)

node.next = node2
node2.next = node3