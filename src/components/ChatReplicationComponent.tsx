function ChatReplication(
  props: {
    img: string
    name: string
    contents: string[]
    centerName?: boolean
  }
) {
  return (
    <div className='Chat'>
      <div className='UserInfo'>
        <img
          className='UserImg'
          src={props.img}
        />

        <div className='Data'>
          <div
            className='Text'
            style={
              props.centerName ? (
                {
                  margin: 'auto'
                }
              ) : undefined
            }
          >
            {props.name}
          </div>

          <div className='Boxes'>
            {props.contents.map(
              (content, index) => (
                <div
                  className='Box Text'
                  key={index}
                >
                  {content}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChatReplication