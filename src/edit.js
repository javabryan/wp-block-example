import { 
	Placeholder,
	TextControl 
} from '@wordpress/components';

import { useBlockProps } from '@wordpress/block-editor';
import { _ } from '@wordpress/i18n';

export default function Edit( { attributes, setAttributes } ) {
	const blockProps = useBlockProps();
	return (
		<div { ...blockProps }>
			<Placeholder
				label={ _('Gutenpride Block', 'gutenpride') }
				instructions={ _('Add a message', 'gutenpride')}
			>
			<TextControl
				value={ attributes.message }
				onChange={ ( val ) => setAttributes( { message: val } ) }
			/>
			</Placeholder>
			<div>
				
			</div>
			<img src={ attributes.coolImage} height="400" width="400"/>
		</div>
	);
}
