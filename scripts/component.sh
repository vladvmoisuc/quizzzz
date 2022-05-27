read -p "Enter the name of the component: " ComponentName

echo "The name of the component will be $ComponentName"

cd ../src/components

echo Creating the folder...

mkdir $ComponentName

cd $ComponentName

echo Setting the index.ts

echo "export { default } from './$ComponentName';" > index.ts

echo Creating the stylesheet

touch styles.module.scss

echo Creating the component itself

echo "import styles from './styles.module.scss';

const $ComponentName = () => {
  return <></>;
};

export default $ComponentName;" > $ComponentName.tsx