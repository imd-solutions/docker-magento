<?php
/**
 * @category PragmaticDigitalTech
 * @package PragmaticDigitalTech_ProductTabs
 * @version 1.0.0
 * @copyright Copyright (c) 2022 PragmaticDigitalTech Company. All Rights Reserved.
 * @license - Copyrighted Commercial Software
 * @author PragmaticDigitalTech Company <contact@pragmaticdigitaltech.com>
 * @link https://pragmaticdigitaltech.com
 */

namespace PragmaticDigitalTech\ProductTabs\Block\Product\Renderer\Listing;

/**
 * Swatch renderer block in Category page
 *
 * @codeCoverageIgnore
 * @SuppressWarnings(PHPMD.CouplingBetweenObjects)
 */
class Configurable extends \Magento\Swatches\Block\Product\Renderer\Listing\Configurable
{
    /**
     * @return int|null
     */
    protected function getCacheLifetime()
    {
        return null;
    }

}
