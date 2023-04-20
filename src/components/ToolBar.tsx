import LoadDemoButton from './LoadDemoButton'
import ClearCacheButton from './ClearCacheButton'
import CreateSceneButton from './CreateSceneButton'
import DialogButton from './DialogButton'
import DropZone from './DropZone'

const ToolBar = () => {
	return (
		<div className='mb-4 flex flex-row gap-4 border-b border-neutral pb-2'>
			<DialogButton label={'Add Panorama'}>
				<DropZone prefix='pano/' />
			</DialogButton>

			<LoadDemoButton />
			<ClearCacheButton />
			<CreateSceneButton />
		</div>
	)
}

export default ToolBar
