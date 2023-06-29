const Notification = props => {
    const {containerClassName, message, iconUrl}=props;
    containerClassName={`notification-container ${className}`}
    return (
        <div className={containerClassName}>
            <img className="icon" src={iconUrl}/>
            <p className="message">{message}</p>
        </div>
    );
  //  Write your code here.
};

const element = (
    <div className="bg-container">
        <h1 className="heading">Notifications</h1>
        <Notification containerClassName="notification-container information" message="Information message" iconUrl="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"/>
         <Notification containerClassName="notification-container success" message="Success message" iconUrl="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"/>
          <Notification containerClassName="notification-container warning" message="Warning message" iconUrl="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"/>
           <Notification containerClassName="notification-container error" message="Error message" iconUrl="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"/>
    </div>
  //  Write your code here.   
)

ReactDOM.render(element, document.getElementById('root'))