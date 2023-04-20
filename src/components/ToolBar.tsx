import LoadDemoButton from './LoadDemoButton'
import Reset from './Reset'
import DialogButton from './DialogButton'
import DropZone from './DropZone'
import CreateSceneList from './CreateSceneList'

const ToolBar = () => {
	return (
		<div className='mb-4 flex flex-row gap-4 border-b border-neutral pb-2'>
			<DialogButton label={'Add Panorama'}>
				<DropZone prefix='pano/' />
			</DialogButton>

			<DialogButton label={'Create Scene'}>
				<CreateSceneList />
			</DialogButton>

			<LoadDemoButton />
			<Reset />
		</div>
	)
}

export default ToolBar
