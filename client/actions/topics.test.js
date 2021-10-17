const topics = require("./topics")
// @ponicode
describe("topics.topicFetchError", () => {
    test("0", () => {
        let callFunction = () => {
            topics.topicFetchError(false)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            topics.topicFetchError(true)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            topics.topicFetchError(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("topics.topicFetchLoading", () => {
    test("0", () => {
        let callFunction = () => {
            topics.topicFetchLoading(true)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            topics.topicFetchLoading(false)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            topics.topicFetchLoading(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("topics.topicFetchSuccess", () => {
    test("0", () => {
        let callFunction = () => {
            topics.topicFetchSuccess("generate bluetooth firewall")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            topics.topicFetchSuccess("transmit bluetooth bus")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            topics.topicFetchSuccess("parse mobile firewall")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            topics.topicFetchSuccess("synthesize wireless microchip")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            topics.topicFetchSuccess("reboot neural card")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            topics.topicFetchSuccess(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("topics.fetchTopics", () => {
    test("0", () => {
        let callFunction = () => {
            topics.fetchTopics()
        }
    
        expect(callFunction).not.toThrow()
    })
})
