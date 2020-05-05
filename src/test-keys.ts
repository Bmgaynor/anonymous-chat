import NodeRSA from 'node-rsa';

const PRIVATE_KEY_1 = 
`-----BEGIN RSA PRIVATE KEY-----
MIIBOgIBAAJBAImTfvryY3H3z8L8o1xdfGL8pWtItlWrvKaJrmkssOxzHXWCX2aS
aS/fFjOVeiGDcD3iheQyBt46dYXLbiu6j4cCAwEAAQJAKiIg5mvrZtD1MQs8YKJE
4O/tHVE0fkJNUVejMZS9Tnxyuc0ykaGmj3TisDS3UwwGoqeutu21Nsbg2Ou8TM0g
mQIhANfh6yLUKx0C426S5mPV42W538P2FSZ9s5HI9Iow1yhlAiEAoyRYVp6Eh2hC
41gXdwe9dR+qUwhlF4W0q8xKa4SBm3sCICU+8h2JM4MG24xZReyVm20Sm5uomk+Q
wml1nVM2R/jNAiATi8s5tYxTXN6Gtos5K6g7XCvf/uV9x/s5iiRwdVPB+QIhAIPn
prUjXITrjcU0rXHZnrCe4S0rvrDdC25DrLKKYOKe
-----END RSA PRIVATE KEY-----`

const PRIVATE_KEY_2 = 
`-----BEGIN RSA PRIVATE KEY-----
MIIBOQIBAAJBAMaV5iDZJsHqnKIP7dN4XO0HHiDFDvPCgZLo6Rz8WaVuXoWbqzC4
HFCNR2Q8WBYIwbl3ehFGldFkQEoDqDjEbrcCAwEAAQJAFGL/JRAl8nJrchfAip0o
rQy2Axc32b52HubaR6eAbIMh1Ybw86u/NU8ImPxXxcIMUEQ+kf3XOal15uEohoq6
gQIhAOJa3YMUn2uccPlJkpR1A4bJdiDDdDhlGpuaYxfVsfZZAiEA4Jf+I3HCIZh6
I8q49I6v62azKZSUOJwNY4gXTW42C48CIAPbopziVBlEcFR/YYUwPWAlvOKwEiIH
7x0p03iLht35AiB3AxPAZH+indHbNYlczl+aNgmqdvk0Jj1SCMOQXF53MQIgWZah
DyfdP4oUome2ECcnYy6c7Gh9EnpKjqhMbPOvvVU=
-----END RSA PRIVATE KEY-----`



export const privateKey1 = new NodeRSA(PRIVATE_KEY_1)

export const privateKey2 = new NodeRSA(PRIVATE_KEY_2)

export const publicKey1 = new NodeRSA(privateKey1.exportKey('public'))
export const publicKey2 = new NodeRSA(privateKey2.exportKey('public'))

export const testMessageTo2From1 = `ALmd1gHUtRRsovcRhzYvfUin3/t/3y1N8npl/wY9/ZTS5TyktEXf5E5qTNJPXqqJ7vk7y/zrHqqU3asrV3pSonx+ErD0MfYsB39XSZEnslTmK571AjE3GEEJALvDE7q0k0A4GLMRzRkpNMpFyrDX/ojFYlYqd0oPbdq1j7erc4Zy9/+UvQ7a75DB/yjkgunpOngsYs67jVsADMYo1oJgqq/4QMsTEE/8UpOYlpYcGii4skjhcrNoOulVitVmUDHeXpgm7d5Ylh0QLROmdLoG8kqP/gJalWcpJRk1ljoNEvU2UqI6qEBVHHs6w23lXlkuTTmuHu7/Nini5DE3zF2Pdw==`

const message = privateKey1.decryptPublic(privateKey2.decrypt(testMessageTo2From1, 'utf8'), 'utf8')
console.log(message)