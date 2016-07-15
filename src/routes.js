import App from 'containers/App';
import NotFound from 'containers/NotFound';

function errorLoading( err ) {
  return NotFound;
  // console.error('Dynamic page loading failed', err);
}

function loadRoute( cb ) {
  return ( module ) => cb( null, module.default );
}

export default {
  component: App,
  childRoutes: [
    {
      path: '/',
      // title: 'Dashboard',
      getComponent( location, cb ) {
        System.import( 'containers/Facts' )
          .then( loadRoute( cb ) )
          .catch( errorLoading );
      }
    },
    {
      path: '/catalog',
      title: 'Catalog',
      icon: 'fa fa-adjust',
      placeholder: 'Каталог',
      getComponent( location, cb ) {
        System.import( 'containers/Catalog' )
          .then( loadRoute( cb ) )
          .catch( errorLoading );
      },
      childRoutes: [
        {title: 'Actions', path: '/catalog/actions', placeholder: 'Список операций'},
        {title: 'Financial Docs', path: '/catalog/finance', placeholder: 'Финансовые документы'},
        {title: 'Costs', path: '/catalog/costs', placeholder: 'Список счетов'},
        {title: 'Accounts', path: '/catalog/accounts', placeholder: 'Пополнение и авторасходование'},
        {title: 'Reports', path: '/catalog/reports', placeholder: 'Отчеты'},
        {
          path: '/facts',
          title: 'Facts',
          getComponent( location, cb ) {
            System.import( 'containers/Facts' )
              .then( loadRoute( cb ) )
              .catch( errorLoading );
          },
          childRoutes: [
            {
              path: '/facts/companies',
              title: 'Companies',
              getComponent( location, cb ) {
                System.import( 'containers/Companies' )
                  .then( loadRoute( cb ) )
                  .catch( errorLoading );
              }
            },
            {
              path: '/facts/*',
              onEnter: ( {params}, replace ) => replace( '/facts' )
            }
          ]
        }
      ]
    },
    {
      path: 'service',
      title: 'Analytics',
      icon: 'fa fa-adjust',
      placeholder: 'Услуги',
      getComponent( location, cb ) {
        System.import( 'containers/Catalog' )
          .then( loadRoute( cb ) )
          .catch( errorLoading );
      },
      childRoutes: [{
        path: '/service/reports',
        title: 'Reports',
        placeholder: 'Отчеты',
        component: NotFound
      },
        {
          title: 'Comparison',
          path: '/service/comparison',
          placeholder: 'Сравнение данных'
        }]
    },
    {
      path: '*',
      component: NotFound
    }

  ]
};
