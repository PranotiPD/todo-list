import PageTitle from './components/PageTitle';
import AppHeader from './components/AppHeader';
import AppContent from './components/AppContent';
import styles from './styles/modules/app.module.scss';
import { Toaster } from 'react-hot-toast';

function App() {
  return(
    <div className="container">
        <PageTitle>Todo List</PageTitle>
        <div className={styles.app_wrapper}>
          <AppHeader/>
          <AppContent />
        </div>
        <Toaster
        position="bottom-left"
        toastOptions={{
          style: {
            fontSize: '1.4rem',
          },
        }}
      />
    </div>
  )
}

export default App;
