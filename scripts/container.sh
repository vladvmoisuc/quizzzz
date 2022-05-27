read -p "Enter the name of the container: " ContainerName

echo "The name of the container will be $ContainerName"

cd ../src/containers

echo Creating the folder...

mkdir $ContainerName

cd $ContainerName

echo Setting the index.ts

echo "export { default } from './$ContainerName';" > index.ts

echo Creating the stylesheet

touch styles.module.scss

echo Creating the copy file

echo "export const HEADING = 'DEFAULT HEADING';" > copy.ts

echo Creating the container itself

echo "import Template from 'containers/Template';

import * as COPY from './copy';

import styles from './styles.module.scss';

const $ContainerName = () => {
  return <Template heading='' label='' onClick={() => {}}></Template>;
};

export default $ContainerName;" > $ContainerName.tsx