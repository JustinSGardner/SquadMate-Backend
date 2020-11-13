<p align="center">
  <a href="" rel="" target="_blank"><img width="150" src="/squadmatelogo.png" alt="SquadMate Logo"></a></p>
</p>

<h1 align="center">SquadMate</h1>
</div>

 ## 
 SquadMate was built to address the challenges a team manager faces regarding communication between themselves and the parents/guardians of the team of students they lead.The application stores data on member registration, medical information and any important documents needed to be prepared for upcoming events.


<p align="center">

![intro_screen]()

![presentation_snippet]()

![Alt Text](url)

</p>

## Features
- Carousel
- Konami Code
- Document Upload 
- File-system Routing
- User Profile Picture
- Breadcrumb Navigation
- Built-in Markdown Page
- Built-in CSS(Less) Support
- User Log-in, Sign-up and Log-out
- Custom Designed and uploaded Logo
- Print Function and icon for Emergency Cards, including a QRCode
- Made use of a Master Component Layout with Integrated Components file system

## Installation
To install SquadMate use the package-management system:

Front-End:
**[npm install](https://www.npmjs.com/package/npm-install**)**

Back-End:
**[npm install](https://dev.to/lukeocodes/enny-stack-the-express-ngrok-and-nodemon-stack-23j)**

## Technical Framework Usage: MERN Stack

- MongoDB
- Express
- React
- Node.js

## Code Framework Style
- Material UI
- Custom Styled Components


## Data References
Custom Secured Data usage.

## Build Status
Deployed.

## Usage
Sign-in and/or Sign-up. There is an admin and user option, each having their own documentation privileges to navigate to with buttons. Administration will have ability to upload documents and print team emergency cards. User will have ability to update emergency card information and complete forms needed by admin.


  <h4>Components for each setup:</h4>

        Administration          | Home Landing     | Team User
       ------------------------- ------------------ ------------
        Admin HomePage          | Sign-in Button   | User HomePage
        AdminProfile            | Sign-up Button   | UserProfile
        GetCardInfo             | Log-out Button   | InitialForm
        TeamList                | Picture Carousel |
        UserCard                | Documents        |
        EmergencyCard           | Lists            |
        PermissionsComponent    |                  |

## Stretch Goals
- [ ] AuthO
- [ ] Calendar.
- [ ] Team Chatroom.
- [ ] Coach and Manager Notification Board.
- [ ] Turn the Custom Application into more widely used app.
- [ ] Random Picture Display of the Events, Teams or Individual players.
- [ ] Ability to give message alerts to parents if a telephone number or signed off form is incomplete.

## Challenges
- Time managing the two(2)-week sprint with all the features we would have liked to include in the project.
- Five(5) developers branching off to build features that were dependant on each other.
- Working with a team of developers on Zoom meetings across the USA and meeting for the first time.

## Triumphs
- The ability to update a Profile Photo.
- Communication between team when pushing up code from a branch without merge conflicts was incredibly efficient.
- Applied the knowledge form the sixteen(16)-week coarse at DigitalCrafts Bootcamp to incorporated that knowledge into using MangoDB Database we did not cover during class.

## Capstone Project Credits Go To The Following Builders
Team Nemesis: 
- [Brittani Erickson](https://github.com/brittani-ericksen) Front-End, LOGO-Design and WireFrame Layout and Full Web Site Coloring.
- [Justin Gardner](https://github.com/JustinSGardner) Full-Stack, Design-Styles and Design-Ideas.
- [Chris Owens](https://github.com/chrisowensdev) Full-Stack and Design-Implementations.
- [Ryan Schniederjan](https://github.com/rynoschni) Project Manager/Scrum Master, Full-Stack Developer and WireFrame-Layout.
- [Annemarie Thomas](https://github.com/Athomas9sa) Master Layout Components, WireFrame-Layout and ReadMe-File.

## GitHub Project Links:

**[Frontend Design](https://github.com/brittani-ericksen/capstone-frontend/tree/main)**
          &
**[Backend Build](https://github.com/JustinSGardner/CapStoneProject-Backend/tree/main)**

## Miscellaneous 
- Git and GitHub Commits, Merges and Branching.
- Firebase Google Storage.
- Used Trello as our guide for completing tasks from: To Do, Doing, Done.
- Trello provided the ability to have up to date communications on our project for all group members.
- Made use of collaborating on LiveShare VSCode when code-along was necessary for portions of the project.

## Code Example Extraction
Admin Component:
```
function EmergencyCard(props) {
    const { user } = props;
    const [teamMembers, setTeamMembers] = useState([]);

    useEffect(() => {
        (async function(){
            const response = await fetch(`process.env.REACT_APP_SERVER_API/team/${user.team}/users`);
            const data = await response.json();
            setTeamMembers(data);
            console.log(data);
        })();
    }, [setTeamMembers, user]);

    let team = teamMembers.filter(member => member._id !== user._id);

    return (
        <>
        <RemovePrint className=".removePrint">
        <Button onClick={window.print}><PrintIcon /></Button>
        </RemovePrint>
        <Container className="printCard">
        {team.map((member) => (            
            <GetCardInfo id={member._id}/>
        ))}
        </Container>
        </>
    );
}
export default EmergencyCard;
```
Style CSS SigninPage Component:
```
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
```

## Support Services
These great services support SquadMate's core infrastructure:
[<img loading="lazy" alt="GitHub" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Logo.png" height="15">](https://github.com/):octocat:
[<img loading="lazy" alt="Material-UI logo" alt="Material-UI logo" src="https://material-ui.com/static/logo.svg" width="30">](https://www.npmjs.com/package/@material-ui/core)

## Questions
## Documentation
## The End.
:sparkles: :rocket: :metal: 
