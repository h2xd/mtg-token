import { defineStore } from "pinia"
import Peer from "peerjs"

export const useRtc = defineStore({
  id: "rtc",
  state: () => ({
    peer: {} as Peer,
    hasPeer: false,
    connections: [] as Peer.DataConnection[],
  }),
  getters: {},
  actions: {
    open(id: string) {
      this.peer = new Peer(id)
      this.peer.on("connection", (connection) => {
        connection.on("data", (data) => {
          console.log("data", data)
        })
      })
      this.hasPeer = true
    },
    connect(id: string) {
      if (!this.hasPeer) {
        return
      }

      const connection = this.peer.connect(id)

      connection.on("open", () => {
        this.connections.push(connection)
        connection.send("hi!")
      })
    },
  },
})
