import WindowWrapper from "#hoc/WindowWrapper";
import { WindowControls } from "#components";
import useWindowStore from "#store/window";

const TxtFile = () => {
  const { windows } = useWindowStore();
  const data = windows.txtfile.data;

  if (!data) return null;

  return (
    <>
      <div id='window-header'>
        <WindowControls target='txtfile' />
        <h2>{data.name}</h2>
      </div>
      <div className='p-5'>
        {data.image && (
          <img
            src={data.image}
            alt={data.name}
            className='mb-4 max-w-full h-auto'
          />
        )}
        {data.subtitle && <h2 className='text-lg mb-4'>{data.subtitle}</h2>}
        {data.description &&
          data.description.map((para, index) => (
            <p key={index} className='mb-2'>
              {para}
            </p>
          ))}
      </div>
    </>
  );
};

const TxtFileWindow = WindowWrapper(TxtFile, "txtfile");

export default TxtFileWindow;
